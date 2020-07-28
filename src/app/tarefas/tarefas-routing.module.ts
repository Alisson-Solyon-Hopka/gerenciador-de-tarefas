import { Routes } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { CadastrarTarefaComponent } from './cadastrar-tarefa/cadastrar-tarefa.component';
import { EditarTarefaComponent } from './editar-tarefa/editar-tarefa.component';

export const TarefaRoutes: Routes = [
    {
        path: 'tarefas',
        redirectTo: 'tarefas/listar'
    },
    {
        path: 'tarefas/listar',
        component: ListarComponent
    },
    {
        path: 'tarefas/cadastrar-tarefa',
        component: CadastrarTarefaComponent
    },
    {
        path: 'tarefas/editar-tarefa/:id',
        component: EditarTarefaComponent
    }
];