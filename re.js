
const fruitList = [
    {
        id: "0",
        title : "Orange",
        Calories: 46,
        Macro:{
            Protein:11.8,
            Fat:0.1,
            Carbohydrate:0.9
        },
        src:"https://cdn.pixabay.com/photo/2016/10/07/13/36/tangerines-1721590_1280.jpg"
    },
    {
        id: 1,
        title : "Apple",
        Calories: 57,
        Macro:{
            Protein:15.5,
            Fat:0.2,
            Carbohydrate:0.1
        },
        src:"https://cdn.pixabay.com/photo/2017/09/26/13/42/apple-2788662_1280.jpg"
    },
    {
        id: 2,
        title : "kiwi fruit",
        Calories: 53,
        Macro:{
            Protein:13.5,
            Fat:0.1,
            Carbohydrate:1.0
        },
        src:"https://cdn.pixabay.com/photo/2016/05/19/12/38/kiwi-1402844_1280.jpg"
    },
    {
        id: 3,
        title : "Peach",
        Calories: 40,
        Macro:{
            Protein:10.2,
            Fat:0.1,
            Carbohydrate:0.6
        },
        src:"https://cdn.pixabay.com/photo/2016/07/16/20/48/peaches-1522680_1280.jpg"
    },
]


function FruitCard (props){
    const {key, title,calorie,macro,src}=props
    return (
        <article className="cards">
            <div className="img-ele">
                <img className=" fruit-img" src={src} alt=""/>
            </div>
            <article className="day-forecast">
                <h2 className="title">{title}</h2>
                <p>Calories : {calorie + " kcal/ 100g"}</p>
                <p>Macro :{"P "+macro.Protein+"g "+"F "+macro.Fat+"g "+"C "+macro.Carbohydrate+"g"} </p>
            </article>
        </article>

    );


}
function App (){
    return (
        <div className="container">
            <h1>Fruit List</h1>
            <div className="card">
                {fruitList.map((info) =>(
                    <FruitCard
                        key={info.id}
                        title={info.title}
                        calorie={info.Calories}
                        macro={info.Macro}
                        src={info.src}
                    />
                ))}


            </div>

        </div>
    );
}




ReactDOM.render(<App /> , document.getElementById('root'));