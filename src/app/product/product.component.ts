import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products: any[] = [
    {id: 1, name: "Laptop", price: 50000, quantity: 5},
    {id: 2, name: "Phone", price: 30000, quantity: 8},
    {id: 3, name: "Tablet", price: 20000, quantity: 4}
  ];

  buyProduct(product: any) {
    if (product.quantity > 0) {
      product.quantity--;
      console.log(`Acheté: ${product.name}. Quantité restante: ${product.quantity}`);
      
      // Option: Afficher une notification
      alert(`Vous avez acheté 1 ${product.name}!`);
      
      // Option: Désactiver le bouton si quantité = 0
      if (product.quantity === 0) {
        console.log(`${product.name} est épuisé!`);
      }
    } else {
      alert(`Désolé, ${product.name} est épuisé!`);
    }
  }

  // Fonction pour vérifier si un produit est épuisé
  isOutOfStock(product: any): boolean {
    return product.quantity === 0;
  }

  // Fonction pour réinitialiser les quantités
  resetQuantities() {
    this.products.forEach(product => {
      if (product.name === "Laptop") product.quantity = 5;
      if (product.name === "Phone") product.quantity = 8;
      if (product.name === "Tablet") product.quantity = 3;
    });
    console.log("Quantités réinitialisées!");
  }

  // Calculer le total des produits en stock
  get totalValue(): number {
    return this.products.reduce((total, product) => {
      return total + (product.price * product.quantity);
    }, 0);
  }
}