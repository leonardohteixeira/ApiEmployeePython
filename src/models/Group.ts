export type Group = {
    id: number;
    name: string;
}

export type GroupDetail = Group & {
    permissions: Permissions[];
}

export type ApiGetGroups = {
    groups: GroupDetail[];
}

export type ApiGetGroup = {
    groups: GroupDetail[];
}