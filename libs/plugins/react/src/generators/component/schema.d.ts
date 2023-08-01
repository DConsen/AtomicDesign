export interface ComponentGeneratorSchema {
    name: string;
    type: 'atoms' | 'molecules' | 'organisms' | 'templates' | 'pages';
    project: string;
    barrelFile: boolean;
}
