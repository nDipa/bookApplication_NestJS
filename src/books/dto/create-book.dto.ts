export class CreateBookDto {
    readonly title: string;
    readonly author: string; 
    readonly description: string;
    readonly image: string;
  }
  // we can not be editing these so thats why it is readonly