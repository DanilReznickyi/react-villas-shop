import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';
import Catigories from './components/Catigories';
import ShowFullItem from './components/ShowFullItem';
import Contacts from './components/Contacts';
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders:[],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Sunset Paradise Villa',
          img: 'Sunset Paradise Villa.jpg',
          desc: 'Enjoy incredible sunsets from this luxurious seaside villa',
          category: 'Turkish',
          price: '150000',
          map: 'https://www.google.com/maps/d/embed?mid=190a1Qike_IiHRMk1i5Mnv85PgLo&hl=ru&ehbc=2E312F',
        },
        {
          id: 2,
          title: 'Seaside Serenity Villa',
          img: 'Seaside Serenity Villa.jpg',
          desc: 'An ideal retreat with panoramic ocean views and coastal tranquility.',
          category: 'Indonesian',
          price: '80000',
          map: 'https://www.google.com/maps/d/embed?mid=12kxNfLkdmZtxOiu14NieFzzvbtQ&hl=ru&ehbc=2E312F',
        },
        {
          id: 3,
          title: 'Mountain Retreat Villa',
          img: 'Mountain Retreat Villa.jpg',
          desc: 'Escape to the mountains and relax in this secluded villa surrounded by nature.',
          category: 'Turkish',
          price: '230000',
          map: 'https://www.google.com/maps/d/embed?mid=1QcrEwKODKDy2GANGBXYwLt_ExH0&hl=ru&ehbc=2E312F',
        },
        {
          id: 4,
          title: 'Modern Elegance Villa',
          img: 'Modern Elegance Villa.jpg',
          desc: 'Contemporary and sophisticated accommodation with modern design.',
          category: 'Spanish',
          price: '125000',
          map: 'https://www.google.com/maps/d/embed?mid=13wDJjzcy1u53AnFxGXZS3DcQx-o&hl=en_US&ehbc=2E312F',
        },
        {
          id: 5,
          title: 'Tropical Oasis Villa',
          img: 'Tropical Oasis Villa.jpg',
          desc: 'Immerse yourself in a tropical paradise with a beautiful garden and pool.',
          category: 'Indonesian',
          price: '95000',
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127166.4540298808!2d119.40262754999999!3d-5.1114895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee329d96c4671%3A0x3030bfbcaf770b0!2z0JzQsNC60LDRgdGB0LDRgCwgTWFrYXNzYXIgQ2l0eSwg0K7Qti4g0YHRg9C70LDQstC10YHQuCwg0JjQvdC00L7QvdC10LfQuNGP!5e0!3m2!1sru!2sua!4v1694604653623!5m2!1sru!2sua',
        },
        {
          id: 6,
          title: 'Historic Charm Villa',
          img: 'Historic Charm Villa.jpg',
          desc: 'Experience the historical charm of this villa with a rich heritage.',
          category: 'Turkish',
          price: '180000',
          map: 'https://www.google.com/maps/d/embed?mid=1sGOqpfhm6SdQ8uHT9mmqNgHrPa8&hl=ru&ehbc=2E312F',
        },
        {
          id: 7,
          title: 'Island Bliss Villa',
          img: 'Island Bliss Villa.jpg',
          desc: 'Enjoy island paradise in this luxurious villa.',
          category: 'Indonesian',
          price: '100000',
          map: 'https://www.google.com/maps/d/embed?mid=12kxNfLkdmZtxOiu14NieFzzvbtQ&hl=ru&ehbc=2E312F',
        },
        {
          id: 8,
          title: 'Luxury Lakeside Villa',
          img: 'Luxury Lakeside Villa.jpg',
          desc: 'Luxurious lakeside living with stunning views.',
          category: 'Spanish',
          price: '320000',
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46281.680501244795!2d-5.66845455!3d43.53142845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd367c66cbf494bf%3A0xbd06d207048d3536!2z0KXQuNGF0L7QvSwg0JDRgdGC0YPRgNC40LDRgSwg0JjRgdC_0LDQvdC40Y8!5e0!3m2!1sru!2sua!4v1694604735685!5m2!1sru!2sua',
        },
        {
          id: 9,
          title: 'Rustic Haven Villa',
          img: 'Rustic Haven Villa.jpg',
          desc: 'Experience rustic living with character and coziness.',
          category: 'Spanish',
          price: '70000',
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95780.6243159463!2d2.1401890999999997!3d41.392667949999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49816718e30e5%3A0x44b0fb3d4f47660a!2z0JHQsNGA0YHQtdC70L7QvdCwLCDQmNGB0L_QsNC90LjRjw!5e0!3m2!1sru!2sua!4v1694604796344!5m2!1sru!2sua',
        },
      ],
      contacts: false,
      showFullItem: false,
      fullItem: {},
    }
    this.state.map = this.state.items
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render(){
  return (
    <div className="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
      <Catigories chooseCategory={this.chooseCategory}/>
      <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
      {this.state.showFullItem && <ShowFullItem onShowItem={this.onShowItem} onAdd={this.addToOrder} item={this.state.fullItem}/>}
      <Footer/>
    </div>
    );
  }
  onShowContacts(){
    this.setState(Contacts)
  }
  onShowItem(item){
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }
  chooseCategory(category){
    if(category === 'All'){
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }
  deleteOrder(id){
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }
  addToOrder(item){
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
      isInArray = true
    })
    if(!isInArray)
    this.setState({orders:[...this.state.orders, item]})
  }
}
export default App;
