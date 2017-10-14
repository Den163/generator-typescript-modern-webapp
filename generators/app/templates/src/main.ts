import * as $ from "jquery";
import { Program } from './Program';

// Set jquery '$' variable as a global
(window as any).$ = $;

/*  
    Entry point of your app is the static method 'Main()' in the 'Program' class
    (Like in C#)
*/ 
$(() => {
    Program.Main();
});
