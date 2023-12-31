import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { componentGenerator } from './generator';
import { ComponentGeneratorSchema } from './schema';

xdescribe('component generator', () => {
  let tree: Tree;
  const options: ComponentGeneratorSchema = { name: 'test', barrelFile: false, project: '', type: undefined };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await componentGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
