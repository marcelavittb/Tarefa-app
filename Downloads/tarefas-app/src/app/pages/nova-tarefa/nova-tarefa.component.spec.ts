import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NovaTarefaComponent } from './nova-tarefa.component';

describe('NovaTarefaComponent', () => {
  let component: NovaTarefaComponent;
  let fixture: ComponentFixture<NovaTarefaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovaTarefaComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NovaTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve adicionar uma nova tarefa à lista', () => {
    component.tarefa = 'Estudar Angular';
    component.adicionarTarefa();
    // Aqui você deve adaptar a lógica conforme o método que adiciona na lista.
    expect(component.tarefa).toBe('');
  });
});
