import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { TachesDTO } from 'src/dto/taches-dto.dto';
import { ServiceTachesService } from 'src/service-taches/service-taches.service';

@Controller('controller-taches')
export class ControllerTachesController {
  constructor(private readonly tachesService: ServiceTachesService) {}

  @Get("test")
  getHello(): string {
    return 'Hello world depuis nestjs';
  }

  @Post('tasks')
  addTache(@Body() tachesDTO: TachesDTO) {
    return this.tachesService.addTache(tachesDTO);
  }

  @Get('tasks')
  getAllTaches() {
    return this.tachesService.getAllTaches();
  }

  @Get('tasks/:id')
  getTacheById(@Param('id') id: string) {
    return this.tachesService.getTacheById(id);
  }

  @Put('tasks/:id')
  updateTache(@Param('id') id: string, @Body() updateTachesDto: any) {
    return this.tachesService.updateTache(id, updateTachesDto);
  }

  @Delete('tasks/:id')
  deleteTache(@Param('id') id: string) {
    return this.tachesService.deleteTache(id);
  }
}
