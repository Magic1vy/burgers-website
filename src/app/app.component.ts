import { Component, HostListener  } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currency = "$";

  // loaderShowed = true;
  // loader = true;

  orderImageStyle: any;
  mainImageStyle: any;

  form = this.fb.group({
    order: ["", Validators.required],
    name: ["", Validators.required],
    phone: ["", Validators.required],
  });

  productsData = [
    {
      image: "Burger-choose.png",
      title: "Cheddar & Bacon Burger",
      text: "Crispy beef patty, bun, tomato, Cheddar cheese, bacon, red onion, iceberg lettuce, mayonnaise, ketchup, cheese sauce.",
      price: 8,
      basePrice: 8,
      grams: 360
    },

    {
      image: "burger-choose-1.png",
      title: "BBQ Bacon and Chicken Burger",
      text: "Brioche sesame seed bun, chicken patty, Cheddar cheese, tomato, pickled cucumber, pickled onion, Romaine lettuce, bacon, BBQ sauce.",
      price: 7,
      basePrice: 7,
      grams: 390
    },

    {
      image: "burger-choose-2.png",
      title: "Double Beef Burger",
      text: "Two beef patties, Cheddar cheese, romaine lettuce, pickles, fresh tomato, bacon, red onion, burger sauce, mustard.",
      price: 10,
      basePrice: 10,
      grams: 420
    },

    {
      image: "Burger-choose-3.png",
      title: "Bavarian Burger",
      text: "Burger bun, beef patty, red onion, cheese, hunter sausage, barbecue sauce, cheese sauce, iceberg lettuce.",
      price: 7,
      basePrice: 7,
      grams: 220
    },

    {
      image: "Burger-choose-4.png",
      title: "Bacon Cheeseburger",
      text: "Burger bun, beef patty, bacon, tomato, pickled cucumber, cheese, cheese sauce, ketchup, greens.",
      price: 8,
      basePrice: 8,
      grams: 220
    },

    {
      image: "Burger-choose-5.png",
      title: "Indiana Burger",
      text: "Burger bun, chicken patty, bacon, egg, pickled cucumber, crispy onions, ketchup, cheese sauce, mustard, greens.",
      price: 9,
      basePrice: 9,
      grams: 320
    },

    {
      image: "Burger-choose-7.png",
      title: "Veggie Burger",
      text: "Burger bun, vegetarian patty, red onion, cheese, fresh tomato, barbecue sauce, cheese sauce, iceberg lettuce.",
      price: 8,
      basePrice: 8,
      grams: 280
    },

    {
      image: "Burger-choose-8.png",
      title: "Whiny Joe Burger",
      text: "Burger bun, beef patty, bacon, tomato, pickled cucumber, red onion, cheese, jalapeno pepper, ketchup, greens.",
      price: 7,
      basePrice: 7,
      grams: 380
    },

    {
      image: "Burger-choose-9.png",
      title: "Double Cheeseburger",
      text: "Burger bun, two beef patties, double cheddar cheese, pickled cucumber, crispy onions, ketchup, cheese sauce, mustard, greens.",
      price: 11,
      basePrice: 11,
      grams: 400
    },

    {
      image: "Burger-choose-10.png",
      title: "Fresh Burger",
      text: "Burger bun, beef patty, bacon, cheddar cheese, egg, salami, barbecue sauce, cheese sauce, iceberg lettuce, fresh tomato.",
      price: 9,
      basePrice: 9,
      grams: 300
    },

    {
      image: "Burger-choose-11.png",
      title: "Zucchini Burger",
      text: "Burger bun, vegetarian chickpea patty, grilled zucchini, tomato, pickled cucumber, cheese, mustard sauce, ketchup, greens.",
      price: 8,
      basePrice: 8,
      grams: 320
    },

    {
      image: "Burger-choose-12.png",
      title: "Double Cheddar Burger",
      text: "Burger bun, vegetarian chickpea patty, grilled zucchini, tomato, pickled cucumber, cheese, mustard sauce, ketchup, greens.",
      price: 9,
      basePrice: 9,
      grams: 360
    },
{
      image: "Burger-choose-13.png",
      title: "Black White Light",
      text: "Black and white burger bun, beef patty, Parmesan cheese, spicy sauce.",
      price: 12,
      basePrice: 12,
      grams: 290
    },
{
      image: "Burger-choose-14.png",
      title: "Black White Bacon",
      text: "Black and white burger bun, beef patty, bacon, Cheddar cheese, iceberg lettuce, sauce, pickles.",
      price: 13,
      basePrice: 13,
      grams: 310
    },
{
      image: "Burger-choose-15.png",
      title: "Black White Max",
      text: "Black and white burger bun, beef patty, Cheddar cheese, iceberg lettuce, egg, black sauce.",
      price: 16,
      basePrice: 16,
      grams: 330
    },
{
      image: "Burger-choose-16.png",
      title: "Black Star Light",
      text: "Black burger bun, chicken patty, egg, iceberg lettuce, fresh tomato, cucumber, sauce.",
      price: 13,
      basePrice: 13,
      grams: 290
    },
{
      image: "Burger-choose-17.png",
      title: "BlackBlack Star",
      text: "Black burger bun, beef patty, Cheddar cheese, iceberg lettuce, fresh tomato, cucumber.",
      price: 14,
      basePrice: 14,
      grams: 310
    },
{
      image: "Burger-choose-18.png",
      title: "Black Star Max",
      text: "Black burger bun, beef patty, bacon, onion, Cheddar cheese, iceberg lettuce, fresh tomato, ketchup.",
      price: 15,
      basePrice: 15,
      grams: 330
    },
  ];

  isMenuOpen = false;

  constructor (private fb: FormBuilder){
  }

  @HostListener('document: mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.orderImageStyle = {transform: 'translate(-' + ((e.clientX * 0.3) / 8) + 'px, -' + ((e.clientY * 0.3) / 8) + 'px)'};
    this.mainImageStyle = {transform: 'translate(-' + ((e.clientX * 0.3) / 8) + 'px, -' + ((e.clientY * 0.3) / 8) + 'px)'};
  }

  // ngOnInit(){
  //   setTimeout(() => {
  //     this.loaderShowed =  false;
  //   }, 3000);
  //   setTimeout(() => {
  //     this.loaderShowed =  false;
  //   }, 4000);
  // }

  scrollTo(target: HTMLElement, burger?: any) {
    target.scrollIntoView({behavior: "smooth"});
    if (burger) {
      this.form.patchValue({order: burger.title + ' (' + burger.price + ' ' + this.currency + ')'});
    }
  }

  confirmOrder(){
    if (this.form.valid){
      alert("Thank you for order! We connect you soon");
      this.form.reset();
    }
  }

  changeCurrency(){
    let newCurrency = "$";
    let coefficient = 1;

    if (this.currency === "$"){
        newCurrency = "₽";
        coefficient = 80;
    } else if (this.currency === "₽"){
        newCurrency = "BYN";
        coefficient = 3;
    } else if (this.currency === 'BYN') {
        newCurrency = '€';
        coefficient = 0.9;
    } else if (this.currency === '€') {
        newCurrency = '¥';
        coefficient = 6.9;
    } else if (this.currency === '¥') {
        newCurrency = 'CA$';
        coefficient = 1.3;
    }

    this.currency = newCurrency;

    this.productsData.forEach((item: any) => {
      item.price = +(item.basePrice * coefficient).toFixed(1) 
    });
    
    this.form.get('order')?.setValue('');
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}

