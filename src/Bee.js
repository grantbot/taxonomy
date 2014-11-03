var Bee = function() {
    //We call the superclass function to initialized the differentiated
    //properties, but need to pass in 'this' to be the newly created 
    //Bee prototype object (remeber what happens when Bee is called with 'new')
    //The 'this' variables within the Car constructor will now refer to the new 
    //Bee object.
    //We don't use Grub.apply(arguments) because that would force the Grub 
    //constructor to take the same exact args as Bee, in the same order. This 
    //is limiting; maybe Bee should take diff args before the ones that
    //Grub also uses? So we use .call(this, arg1, arg2), though they must still
    //be in the same order, but now we can be explicit about what gets passed
    //to Grub
    Grub.call(this);

    //Overwrite superclass properties with Bee's own differentiated ones
    this.age = 5;
    this.color = 'yellow';
    this.job = 'Keep on growing';
    
};

//We need to use Object.create to set up the prototype delegation without actually 
//running the Grub constructor, as would happen if we used "new Grub()". These are 
//the only two ways to set up prototype delegation. 
Bee.prototype = Object.create(Grub.prototype);

//We completely replace the Bee.prototype with the Grub.prototype, so if we wanted
//to be able to check which constructor made some specific Bee instance, it'd be 
//nice to know it was 'Bee', and not 'Grub', which it would say if the below line 
//wasn't here.
//Prototype comes with every function and is empty save the constructor property. 
//It's not crucial to reset it but it's nice to be specific, esp if you're ever
//going to use instanceOf
Bee.prototype.constructor = Bee;

