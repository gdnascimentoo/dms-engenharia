import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: '/src/output.css',
})
export class ContactComponent {
  nameDele: any;
  body: any;

  finalEmail() {
    return "mailto:dms_maximiano@yahoo.com.br?subject=" + encodeURIComponent(this.nameDele) +
        "&body=" + encodeURIComponent(this.body);
  }

  finalWhatsapp() {
      return "https://wa.me/47997265827?text=" + encodeURIComponent(this.body);
  }
}
