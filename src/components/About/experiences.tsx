/**
 * List item type definition.
 */
export type SimpleListItemType = {
  key: string;
  primary: string;
};

/**
 * Array of mentionable work experiences.
 */
export const work: Array<SimpleListItemType> = [
  {
    key: 'experience-01',
    primary: '+10 years of professional experience in software development',
  },
  {
    key: 'experience-02',
    primary: '+5 years of professional experience in cloud applications',
  },
  {
    key: 'experience-03',
    primary: '+5 years of experience in game development',
  },
];

/**
 * Array of mentionable programming language experiences.
 */
export const programmingLanguages: Array<SimpleListItemType> = [
  {
    key: 'programming-language-01',
    primary: 'JavaScript/TypeScript',
  },
  {
    key: 'programming-language-02',
    primary: 'C++',
  },
  {
    key: 'programming-language-03',
    primary: 'C#',
  },
  {
    key: 'programming-language-04',
    primary: 'GDScript',
  },
  {
    key: 'programming-language-05',
    primary: 'Java',
  },
  {
    key: 'programming-language-06',
    primary: 'LuaScript',
  },
];

/**
 * Array of mentionable game engine experiences.
 */
export const gameEngines: Array<SimpleListItemType> = [
  {
    key: 'game-engine-01',
    primary: 'Unreal Engine',
  },
  {
    key: 'game-engine-02',
    primary: 'Godot Engine',
  },
  {
    key: 'game-engine-03',
    primary: 'Unity',
  },
];
