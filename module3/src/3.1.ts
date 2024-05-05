{
    //OOP - Class
    class Animal {
        name :string;
        species: string;
        sound: string

        constructor(name: string, species: string, sound: string){
            this.name = name;
            this.species = species;
            this.sound = sound;
        }
    }

    const cat = new Animal("Sohel")

}