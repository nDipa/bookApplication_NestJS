import { 
 Controller,
 Get,
 Post,
 Put,
 Delete,
 Body,
 Param,
} from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { BooksService } from './books.service';
import { Book } from './interfaces/book.interface';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    @Get()
    findAll(): Promise<Book[]> {
      return this.booksService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id): Promise<Book> {
      return this.booksService.findOne(id);
    }

    @Post()
    create(@Body() createBookDto: CreateBookDto): Promise<Book> {
      return this.booksService.create(createBookDto);
    }

    @Delete(':id')
    delete(@Param('id') id): Promise<Book> {
      return this.booksService.delete(id);
    }

    @Put(':id')
    update(@Body() updateItemDto: CreateBookDto, @Param('id') id): Promise<Book> {
      return this.booksService.update(id, updateItemDto);
    }


  


  
  
}
