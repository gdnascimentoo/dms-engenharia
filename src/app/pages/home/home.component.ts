import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: '/src/output.css',
})
export class HomeComponent {
  @ViewChild('slidesContainer', { static: true }) slidesContainer!: ElementRef; // Referência ao container dos slides
  @ViewChild('slide', { static: true }) slide!: ElementRef; // Referência ao slide individual
  @ViewChild('slideArrowPrev', { static: true }) prevButton!: ElementRef; // Referência ao botão de voltar
  @ViewChild('slideArrowNext', { static: true }) nextButton!: ElementRef; // Referência ao botão de avançar

  isMouseHoverCarousel: boolean = false;

  ngAfterViewInit(): void {
    // Adiciona os event listeners aos botões
    this.nextButton.nativeElement.addEventListener('click', () => {
      this.scrollToNextSlide();
    });

    this.prevButton.nativeElement.addEventListener('click', () => {
      this.scrollToPrevSlide();
    });

    this.setTimeoutToChangeSlide();
  }

  // Função para rolar para o próximo slide
  scrollToNextSlide(): void {
    const slideWidth = this.slide.nativeElement.clientWidth;
    this.slidesContainer.nativeElement.scrollLeft += slideWidth;
    this.nextButton.nativeElement.disabled = true;
    setTimeout(() => {
      this.nextButton.nativeElement.disabled = false;
    }, slideWidth * 0.7713498622589532);
  }

  // Função para rolar para o slide anterior
  scrollToPrevSlide(): void {
    const slideWidth = this.slide.nativeElement.clientWidth;
    this.slidesContainer.nativeElement.scrollLeft -= slideWidth;
    this.prevButton.nativeElement.disabled = true;
    setTimeout(() => {
      this.prevButton.nativeElement.disabled = false;
    }, slideWidth * 0.7713498622589532);
  }

  setTimeoutToChangeSlide(): void {
    window.setInterval(() => {
      if (!this.isMouseHoverCarousel) {
        this.scrollToNextSlide();
      }
    }, 4000);
  }

  mouseEnter(): void {
    this.isMouseHoverCarousel = true;
  }

  mouseLeave(): void {
    this.isMouseHoverCarousel = false;
  }
}
