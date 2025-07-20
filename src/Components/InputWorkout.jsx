export default function InputWorkout() {
    return (
        <section>
            <h2>Add New Workout</h2>
            <br></br>
            <form>
                <fieldset>
                    <legend>Workout Details</legend>
                    
                    <label for="workout-type">Workout type: </label>
                    <select name="workout-type" id="workout-type">
                        <option value="">--Chose an option--</option>
                        <option value="run">Run</option>
                        <option value="walk">Walk</option>
                        <option value="cycling">Cycling</option>
                    </select>

                    <label for="workout-distance">Distance in miles: </label>
                    <input type="text" id="workout-distance" name="workout-type" />

                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        </section>
    )
}