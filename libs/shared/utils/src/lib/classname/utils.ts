import { twMerge } from 'tailwind-merge';

type ClassArray = (string | undefined)[];
export function classnames(classes: ClassArray): string {
    return classes ? twMerge(classes.filter(Boolean)) : '';
}

export const classNames = classnames;
