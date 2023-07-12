export interface Entry {
    _id: string,
    description: string,
    createdAt: number,
    status: EntryesStatus
}

export type EntryesStatus = 'pending' | 'in-progress' | 'finished'