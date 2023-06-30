# GoInfoteam JR FE Developer Challenge

## Obiettivo:
Il tuo obiettivo è creare una semplice applicazione Angular per la gestione di una lista di attività (todo list).


## Features
ok- Mostra un elenco di attività.
ok- Permetti all'utente di aggiungere una nuova attività.
ok- Permetti all'utente di segnare un'attività come completata.
ok- Permetti all'utente di rimuovere un'attività.
ok- Aggiungi la funzionalità di filtro per visualizzare solo le attività completate o solo quelle da completare.
ok- Implementa un contatore che mostri il numero totale di attività e il numero di attività completate.

## Linee guida
ok- Utilizza Angular CLI per creare un nuovo progetto.
ok- Utilizza componenti separati per l'elenco delle attività e il form per aggiungere nuove attività.
ok- Utilizza un servizio per gestire la logica delle attività, ad esempio il recupero, l'aggiunta, la rimozione e il conteggio.
ok- Utilizza il two-way data binding per mantenere sincronizzati i dati tra il componente dell'elenco delle attività e il form di aggiunta.
ok- Utilizza il ngIf o il ngFor per mostrare o nascondere gli elementi in base alle condizioni.

## Bonus (opzionale):
- Aggiungi la funzionalità di modifica di un'attività esistente.
- Implementa un'interfaccia utente accattivante utilizzando CSS o un framework di stile come Bootstrap o Angular Material.
- Utilizza il routing per creare una pagina di dettaglio per ciascuna attività, con la possibilità di modificare i dettagli dell'attività.

## Scopo
Lo scopo di questo test è capire come ragioni, come approcci e risolvi problemi e, ovviamente, il tuo lato creativo. Sorprendici!

## Check finali (ADM):
- Lingua inglese ovunque
- Commenti (ita)
- Saper spiegare il funzionamento usando le corrette terminologie
    (es. variabili template #<nome>, decoratore @, ... )
--------------------------------------------------------------------------------------


# Installazione Angular CLI / (https://angular.io/cli)
npm install -g @angular/cli

# Creazione progetto
ng new <nome progetto>

# Esecuzione progetto
ng serves

# Creazione di un componente
ng g c <nome componente> // ng=Angular g=generate c=component

# Creazione di un servizio
ng g s <nome servizio> // ng=Angular g=generate s=servizio

# Installazione e importazione Angular Material / (https://material.angular.io/guide/getting-started)
ng add @angular/material

in app.module.ts:
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule ({
  imports: [
    MatSlideToggleModule,
  ]
})
class AppModule {}

in app.component.html:
<mat-slide-toggle>Toggle me!</mat-slide-toggle>
