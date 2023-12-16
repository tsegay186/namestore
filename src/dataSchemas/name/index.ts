export interface entityName {
    id:string,
    name: string,
    genderIdentity: 'man'|'woman'|'allGenders'|'unknown',
    examples?: string[];
    shorts?: string[],
    origin?: string,
    ageStage: 'baby'|'adult'|'allAges'|'unknown',
    designation?: 'profession'|'honor'|'proper'|'unknown'
}