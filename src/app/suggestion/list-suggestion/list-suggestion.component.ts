import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Suggestion } from '../../models/suggestion';

@Component({
  selector: 'app-list-suggestion',
  templateUrl: './list-suggestion.component.html',
  styleUrls: ['./list-suggestion.component.css']
})
export class ListSuggestionComponent {
  constructor(private router: Router) {}



  // --- Liste statique des suggestions ---
  suggestions: Suggestion[] = [
    {
      id: 1,
      title: 'Organiser une journée team building',
      description: 'Suggestion pour organiser une journée de team building pour renforcer les liens entre les membres de l\'équipe.',
      category: 'Événements',
      date: new Date('2025-01-20'),
      status: 'acceptee',
      nbLikes: 10
    },
    {
      id: 2,
      title: 'Améliorer le système de réservation',
      description: 'Proposition pour améliorer la gestion des réservations en ligne avec un système de confirmation automatique.',
      category: 'Technologie',
      date: new Date('2025-01-15'),
      status: 'refusee',
      nbLikes: 0
    },
    {
      id: 3,
      title: 'Créer un système de récompenses',
      description: 'Mise en place d\'un programme de récompenses pour motiver les employés et reconnaître leurs efforts.',
      category: 'Ressources Humaines',
      date: new Date('2025-01-25'),
      status: 'refusee',
      nbLikes: 0
    },
    {
      id: 4,
      title: 'Moderniser l\'interface utilisateur',
      description: 'Refonte complète de l\'interface utilisateur pour une meilleure expérience utilisateur.',
      category: 'Technologie',
      date: new Date('2025-01-30'),
      status: 'en_attente',
      nbLikes: 0
    }
  ];

  // --- Liste des favoris ---
  favoris: Suggestion[] = [];

  // --- Recherche (Two-way binding) ---
  searchText: string = '';

  // --- Getter : suggestions filtrées par titre ou catégorie ---
  get filteredSuggestions(): Suggestion[] {
    const search = this.searchText.toLowerCase();
    return this.suggestions.filter(s =>
      s.title.toLowerCase().includes(search) ||
      s.category.toLowerCase().includes(search)
    );
  }

  // --- Event binding : Like ---
  onLike(suggestion: Suggestion): void {
    suggestion.nbLikes++;
  }

  // --- Event binding : Ajouter aux favoris ---
  onAjouterFavori(suggestion: Suggestion): void {
    // Vérifier qu'elle n'est pas déjà dans les favoris
    {
      this.favoris.push(suggestion);
    }
  }


}