export interface Tag {
  id: number;
  name: string;
  subTags?: Tag[];
  parentTag?:Tag;
  creation_date: string;
}
