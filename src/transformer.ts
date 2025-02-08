export const transformer = (classNamesMap: { [key: string]: string }, target?: string) => {
    return (classNameOrModifiers: string | object = "", modifiersParam: object = {}) => {
        let blockClassName = "";
        let modifiers = modifiersParam;
        if (typeof classNameOrModifiers === "object") {
            modifiers = classNameOrModifiers;
        } else {
            blockClassName = classNameOrModifiers;
        }
        let baseClass = target ? target : Object.keys(classNamesMap)[0];
        if (!baseClass) {
            return "";
        }
        if (blockClassName) {
            baseClass += `__${blockClassName}`;
        }
        let resultClassNames = classNamesMap[baseClass];
        for (const modifier of Object.keys(modifiers)) {
            const key = modifier as keyof typeof modifiers;
            if (modifiers[key] === undefined) {
                continue;
            }
            let newClassName = "";
            if (typeof modifiers[key] === "boolean") {
                if (modifiers[key] as unknown as boolean) {
                    newClassName = classNamesMap[`${baseClass}--${modifier}`] ?? "";
                }
            } else if (typeof modifiers[key] === "string" || typeof modifiers[key] === "number") {
                newClassName = classNamesMap[`${baseClass}--${modifier}-${modifiers[key]}`] ?? "";
            } else {
                newClassName = classNamesMap[`${baseClass}--${modifier}`] ?? "";
            }
            if (newClassName) {
                resultClassNames += ` ${newClassName}`;
            }
        }
        return resultClassNames;
    };
};
