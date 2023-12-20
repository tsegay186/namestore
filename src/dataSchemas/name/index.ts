export interface entityName {
    id:string,
    name: string,
    genderIdentity: 'man'|'woman'|'person'|'unknown',
    examples: string[];
    shorts: string[],
    origin?: string,
    ageStage: 'baby'|'adult'|'person'|'unknown',
    designation?: 'profession'|'honor'|'proper'|'unknown'
}