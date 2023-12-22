import React from "react"

const NewForm = () => {
    return (
        <form>
            <label>
                <p>Number of People</p> <input type="text" name="peopleNumber" />
            </label>
            <label>
                <p>Budget</p> <input type="number" name="budget" />
            </label>
            <label>
                <p>Food Plan</p> <input type="text" name="foodPlan" />
            </label>
            <label>
                <p>Food Cost</p> <input type="number" name="foodPricing" />
            </label>
            <label>
                <p>Lodging</p> <input type="text" name="lodging" />
            </label>
            <label>
                <p>Lodging Price</p> <input type="number" name="lodgingPrice" />
            </label>
            <label>
                <p>Destination</p> <input type="text" name="tripLocation" />
            </label>
            <label>
                <p>Visits</p> <input type="text" name="visits" />
            </label>
            <label>
                <p>Travel Means</p><input type="text" name="travelMeans" />
            </label>
            <label>
                <p>Cost Of Travel Means</p> <input type="number" name="travelMeansPrice" />
            </label>
            <input type="submit" value="submit" />
        </form>
    )
}

export default NewForm