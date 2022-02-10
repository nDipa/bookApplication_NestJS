import { Injectable } from '@nestjs/common';
import { Book } from './interfaces/book.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BooksService {
 constructor(@InjectModel('Book') private readonly itemModel:Model<Book>) {}

 async findAll(): Promise<Book[]> {
    return await this.itemModel.find();
  }

  async findOne(id: string): Promise<Book> {
    return await this.itemModel.findOne({ _id: id });
  }

  async create(book: Book): Promise<Book> {
    const newItem = new this.itemModel(book);
    return await newItem.save(); 
  }

  async delete(id: string): Promise<Book> {
    return await this.itemModel.findByIdAndRemove(id);
  }

  async update(id: string, book: Book): Promise<Book> {
    return await this.itemModel.findByIdAndUpdate(id, book, { new: true });
}
  
}
