import './App.css'
import Button from "./components/Button.jsx";
import bag1 from "./assets/bag_1.png";
import bag2 from "./assets/bag_2.png";
import bag3 from "./assets/bag_3.png";
import bag4 from "./assets/bag_4.png";
import brand from "./assets/brand.png";
import ourStory from "./assets/our_story.png";
import Product from "./components/Product.jsx";
import Tile from "./components/Tile.jsx";

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button textValue="to the collection" isDisabled={false}/>
                <Button textValue="shop all bags" isDisabled={false}/>
                <Button textValue="pre-orders" isDisabled={true}/>
            </nav>
            <main>
                {/*<article>*/}
                {/*    <span>Best seller</span>*/}
                {/*    <img src={bag1} alt="bag1"/>*/}
                {/*    <p>The handy bag</p>*/}
                {/*    <h4>€400,-</h4>*/}
                {/*</article>*/}
                {/*<article>*/}
                {/*    <span>Best seller</span>*/}
                {/*    <img src={bag2} alt="bag1"/>*/}
                {/*    <p>The stylish bag</p>*/}
                {/*    <h4>250,-</h4>*/}
                {/*</article>*/}
                {/*<article>*/}
                {/*    <span>Best seller</span>*/}
                {/*    <img src={bag3} alt="bag1"/>*/}
                {/*    <p>The simple bag</p>*/}
                {/*    <h4>€300,-</h4>*/}
                {/*</article>*/}
                {/*<article>*/}
                {/*    <span>Best seller</span>*/}
                {/*    <img src={bag4} alt="bag1"/>*/}
                {/*    <p>The trendy bag</p>*/}
                {/*    <h4>€150,-</h4>*/}
                {/*</article>*/}
                <Product label="Best seller" image={bag1} name="The handy bag" price="400"/>
                <Product label="Best seller" image={bag2} name="The stylish bag" price="250"/>
                <Product label="Best seller" image={bag3} name="The simple bag" price="300"/>
                <Product label="Best seller" image={bag4} name="The trendy bag" price="150"/>
            </main>
            <footer>
                {/*<section>*/}
                {/*    <h2>The brand</h2>*/}
                {/*    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolores ea quibusdam sint.*/}
                {/*        Accusantium aliquid, animi atque cupiditate dignissimos distinctio eius et hic ipsam iure odit*/}
                {/*        perspiciatis quos ullam, ut.</p>*/}
                {/*    <p>*/}
                {/*        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eligendi in inventore perspiciatis*/}
                {/*        placeat. Incidunt iure magnam molestias natus nihil nobis omnis optio perferendis repellat?*/}
                {/*        Dolore enim repellendus sapiente suscipit.*/}
                {/*    </p>*/}
                {/*</section>*/}
                {/*<section>*/}
                {/*    <img src={brand} alt="brand"/>*/}
                {/*</section>*/}
                {/*<section>*/}
                {/*    <img src={ourStory} alt="our story"/>*/}
                {/*</section>*/}
                {/*<section>*/}
                {/*    <h2>Our story</h2>*/}
                {/*    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur eum obcaecati temporibus? A*/}
                {/*        ad adipisci aperiam architecto assumenda atque blanditiis dolorum in iure magnam porro qui*/}
                {/*        ratione, sequi, tenetur, velit?</p>*/}
                {/*</section>*/}
                <Tile>
                    <h2>The brand</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolores ea quibusdam sint.
                            Accusantium aliquid, animi atque cupiditate dignissimos distinctio eius et hic ipsam iure odit
                            perspiciatis quos ullam, ut.</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eligendi in inventore perspiciatis
                            placeat. Incidunt iure magnam molestias natus nihil nobis omnis optio perferendis repellat?
                            Dolore enim repellendus sapiente suscipit.
                        </p>
                </Tile>
                <Tile>
                    <img src={brand} alt="brand"/>
                </Tile>
                <Tile>
                    <img src={ourStory} alt="our story"/>
                </Tile>
                <Tile>
                    <h2>The brand</h2>
                    <h2>Our story</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur eum obcaecati temporibus? A
                        ad adipisci aperiam architecto assumenda atque blanditiis dolorum in iure magnam porro qui
                        ratione, sequi, tenetur, velit?</p>
                </Tile>
            </footer>
        </>
    )
}

// function logButtonValue(e){
//     console.log(e.currentTarget.textContent);
// }

export default App
