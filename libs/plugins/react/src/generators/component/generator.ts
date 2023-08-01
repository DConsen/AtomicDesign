import { formatFiles, generateFiles, readProjectConfiguration, Tree } from '@nx/devkit';
import * as path from 'path';
import { ComponentGeneratorSchema } from './schema';

export async function componentGenerator(tree: Tree, options: ComponentGeneratorSchema) {
    const sourceRoot = readProjectConfiguration(tree, options.project).sourceRoot;
    generateFiles(tree, path.join(__dirname, 'files'), sourceRoot, options);

    if (options.barrelFile) {
        const typeBarrelPath = path.join(sourceRoot, 'components', options.type, 'index.ts');
        const typeBarrel = tree.exists(typeBarrelPath);

        if (!typeBarrel) {
            tree.write(typeBarrelPath, `export * from './${options.name}`);
        } else {
            const contents = tree.read(typeBarrelPath).toString();
            const newContents = contents + `export * from './${options.name}'`;
            tree.write(typeBarrelPath, newContents);
        }

        const componentBarrelPath = path.join(sourceRoot, 'components', 'index.ts');
        const componentBarrel = tree.exists(componentBarrelPath);

        if (!componentBarrel) {
            tree.write(componentBarrelPath, `export * from './${options.type}`);
        } else {
            const contents = tree.read(componentBarrelPath).toString();
            const isNotExported = !contents.includes(`export * from './${options.type}'`);

            if (isNotExported) {
                const newContents = contents + `export * from './${options.type}'`;
                tree.write(componentBarrelPath, newContents);
            }
        }
    }

    await formatFiles(tree);
}

export default componentGenerator;
