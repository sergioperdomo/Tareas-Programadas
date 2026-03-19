import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";


@NgModule({
  declarations: [CardComponent],
  exports: [CardComponent], // Definimos todos los modulos y los componentes, que no solo se necesita internamente, sino que se necesitan en otros modulos, para eso se exportan
})
export class SharedModule {}
