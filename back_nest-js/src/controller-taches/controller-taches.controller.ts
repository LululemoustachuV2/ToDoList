import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { TachesDTO } from 'src/dto/taches-dto.dto';
import { ServiceTachesService } from 'src/service-taches/service-taches.service';

@Controller('controller-taches')
// Définit la route principale pour ce controller : /controller-taches
export class ControllerTachesController {
  constructor(private readonly tachesService: ServiceTachesService) {}
  // Injection du service Taches pour déléguer la logique métier

  @Get('test')
  // Route GET /controller-taches/test pour tester si le controller répond
  getHello(): string {
    return 'Hello world depuis nestjs';
  }

  @Post('tasks')
  // Route POST /controller-taches/tasks pour créer une nouvelle tâche
  // Reçoit un DTO contenant les données de la tâche
  addTache(@Body() tachesDTO: TachesDTO) {
    return this.tachesService.addTache(tachesDTO);
  }

  @Get('tasks')
  // Route GET /controller-taches/tasks pour récupérer toutes les tâches
  getAllTaches() {
    return this.tachesService.getAllTaches();
  }

  @Get('tasks/:id')
  // Route GET /controller-taches/tasks/:id pour récupérer une tâche par son id
  getTacheById(@Param('id') id: string) {
    return this.tachesService.getTacheById(id);
  }

  @Put('tasks/:id')
  // Route PUT /controller-taches/tasks/:id pour mettre à jour une tâche existante
  // Reçoit l'id en paramètre et les données à modifier dans le body
  updateTache(@Param('id') id: string, @Body() updateTachesDto: any) {
    return this.tachesService.updateTache(id, updateTachesDto);
  }

  @Delete('tasks/:id')
  // Route DELETE /controller-taches/tasks/:id pour supprimer une tâche par son id
  deleteTache(@Param('id') id: string) {
    return this.tachesService.deleteTache(id);
  }
}
