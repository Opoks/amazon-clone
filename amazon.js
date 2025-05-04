document.querySelector('.container').innerHTML= todoList.map((todo,todoIndex)=>{
    return(`
            <div key=${todoIndex} class="productcon">
                <img src=${todo.image}>
                <div>${todo.product_name}</div>
                <div>
                    <span>${todo.rating.stars}</span>
                    <span>${todo.rating.count}</span>
                </div>
            </div>
            <div>
            <select name="rate" id="rate">
                <option value="5.0" selected>5.0</option>
                <option value="4.5">4.5</option>
                <option value="4.0">4.0</option>
                <option value="3.5">3.5</option>
                <option value="3.0">3.0</option>
                <option value="2.5">2.5</option>
                <option value="2.0">2.0</option>
                <option value="1.5">1.5</option>
                <option value="1.0">1.0</option>
            </select>
            </div>
        `)
})