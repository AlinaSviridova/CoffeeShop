import { Routes, Route } from "react-router-dom"; 
import { Component } from 'react';

import './App.sass';  
import Home from './Home/Home';
import OurCoffee from './OurCoffee/OurCoffee';
import OurPleasure from './OurPleasure/OurPleasure';
import InnerCoffee from './Products/InnerCoffee';
import {data} from './dumpData.js';

 
class App extends Component { 
  constructor(props) {
      super(props); 
      this.state = { 
          products: data.products,
          term: '', 
          filterArr: []
          }
}
searchEmp = (data, term) => { 
  if (term.length === 0) {
      return data;
  }
  return data.filter( item => {  
      return (item.name.toLowerCase().indexOf(term) > -1 ) || (item.country.toLowerCase().indexOf(term) > -1 )
  })
  
}
onSearching = (e) =>{  
  const term = e.target.value;
  // это устанавливает новое веьлью  в строку 17
  this.setState({term}); 
}

filterEmp = (products, filterNew) => { 
 
  if (filterNew.length == 0) {
    return products;
  }
  // это итерация в итерации
  // эта хренотень заходит в каждый продукт item массива products
  // берет из каждого продукта страну item.country
  // и проверяет инклюдс ли наш новоприбывший массив filterNew значение item.country
  // если да - то окей
   return products.filter(item => filterNew.includes(item.country)); 
 
  
}

onFiltering = (filteredItem) =>{ 
  // это устанавливает новое веьлью  в строку 17
  // это колбек функция, которая будет работать внутри сет стейта, функция отдает мне весь стейт
  // функция может обновлять предыдущее значение
  
  this.setState((prevValues) => { 
  
    // prevValues - это наш стейт, проверяем есть ли (includes?)  в массиве стейта filterArr наше выбранное значение filteredItem 
    if ( prevValues.filterArr.includes(filteredItem)){ 
      // сохраняем в новую переменную все значения кроме отфильтрованного потому, что он у нас уже там был с предыдущего фильтра
      // filter работает так:  если (item !== filteredItem) все вот это true - то просто возвращается item, в другом случае фильтруется = удаляется
      const newArray = prevValues.filterArr.filter(item => item !== filteredItem);

      return {
        // таким образом мы копируем = сохраняем наш текущий стейт
        // this.state = { 
        //   products: data.products,
        //   term: '', 
        //   filterArr: []
        //   } 
        ...prevValues,
        // и в нем только перезаписываем вот эту строку  filterArr: [] новым массивом, а иначе обьект бы полностью
        // перезаписался и products: data.products,  term: '',  бы исчезли
        filterArr: newArray
      };
    }

    return {
      // если было выбрано новое уникальное значение фильтра то, сохраняем наш текущий стейт ...prevValues
      ...prevValues,
      // и при этом создаем новый массив, в который кладем наш текущий стейт с текущим списком фильтров (...prevValues.filterArr) и добавляем новенький готовенький filteredItem
      filterArr: [...prevValues.filterArr, filteredItem] 
    }


  });
}
 
  render() {  
 
    // const { homepage, ourcoffee, foryourpleasure, products } = this.props.staticdata;
   
    const { homepage, ourcoffee, foryourpleasure } =  data; 
    const { products, term, filterArr } =  this.state;
    const visibleData =  this.filterEmp((this.searchEmp(products, term)), filterArr); 
    return ( 
        <div className="App">  
          <Routes>
            <Route path="/" element={<Home homepage={homepage} products={products}/>} />
            <Route path="coffee-shop" element={<OurCoffee ourcoffee={ourcoffee} products={visibleData} onSearching={this.onSearching} onFiltering={this.onFiltering} filter={filterArr}/>} />
            <Route path="our-pleasure" element={<OurPleasure foryourpleasure={foryourpleasure} products={products}/>} />
            <Route path="inner-coffee" element={<InnerCoffee ourcoffee={ourcoffee} products={products}/>} />
          </Routes>
        </div>
      
      
    );
  }
}

export default App;
