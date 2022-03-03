import Calendar from "../component/Calendar"

export default function Calendars () {
    return (
        <> 
<div>
<button id="authorize_button" style="display: none;">Authorize</button>
    <button id="signout_button" style="display: none;">Sign Out</button>

<Calendar />

    </div>
    </>
    )
}