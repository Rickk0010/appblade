import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { addIcons } from 'ionicons';
import { logoIonic, square, star, ellipse, musicalNotes, book, gameController, brush, headset, logoGithub, logoInstagram, tv, footsteps, colorFill, bug, code, hammer, albums, shirt, logOutOutline } from 'ionicons/icons';

import {
  IonHeader,        // Cabeçalho da página
  IonToolbar,       // Barra dentro do cabeçalho
  IonTitle,         // Título
  IonContent,       // Área principal da página
  IonFooter,        // Rodapé
  IonButton,        // Botão
  IonIcon,          // Ícones
  IonInput,         // Campo de texto
  IonTextarea,      // Campo de texto maior
  IonLabel,         // Texto/label
  IonItem,          // Item de lista ou formulário
  IonList,          // Lista
  IonCard,          // Card
  IonCardHeader,    // Cabeçalho do card
  IonCardTitle,     // Título do card
  IonCardSubtitle,  // Subtítulo do card
  IonCardContent,   // Conteúdo do card
  IonThumbnail,     // Miniatura de imagem
  IonImg,           // Imagem
  IonAlert,         // Caixa de alerta
  IonCheckbox,      // Caixa de seleção
  IonRadio,         // Botão de opção
  IonRadioGroup,    // Grupo de radio buttons
  IonSelect,        // Caixa de seleção
  IonSelectOption,  // Opção do IonSelect
  IonToggle,        // Interruptor liga/desliga
  IonSpinner,       // Indicador de carregamento
  IonBadge,         // Pequeno indicador/etiqueta
  IonChip,          // Pequena etiqueta interativa
  IonAvatar,
  IonGrid,
  IonRow,
  IonCol
        
} from '@ionic/angular';



@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
  imports: 
  [
    RouterLink,

    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonAvatar,
    IonInput,
    IonButton,
    IonChip,
    IonLabel,
    IonGrid,
    IonRow,
    IonCol,
    IonList,
    IonItem,
    IonIcon
  ],

})
export class GaleriaPage implements OnInit {

  constructor() { addIcons({ logoIonic, square, star, ellipse, musicalNotes, book, gameController, brush, headset, logoGithub, logoInstagram, tv, footsteps, colorFill, bug, code, hammer, albums, shirt, logOutOutline  }); }

  ngOnInit() {
  }

}
