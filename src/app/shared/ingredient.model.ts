export class Ingredient
{
  constructor(public name: string, public amount: number)
  {
  }

  isValid()
  {
    return (this.name && this.amount);
  }
}
