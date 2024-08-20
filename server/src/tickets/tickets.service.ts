import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class TicketsService {
  constructor(private prisma: PrismaService) {}
  create(createTicketDto: CreateTicketDto) {
    return this.prisma.ticket.create({ data: createTicketDto });
  }

  findAll() {
    return this.prisma.ticket.findMany({include:{Client:true}});
  }

  findOne(id: number) {
    return this.prisma.ticket.findUnique({ where: { id } });
  }

  update(id: number, updateTicketDto: UpdateTicketDto) {
    return this.prisma.ticket.update({
      where: { id },
      data: updateTicketDto,
    });
  }

  remove(id: number) {
    return this.prisma.ticket.delete({ where: { id } });
  }
}
