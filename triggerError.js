// <!-- to show that alert box -->
const mn = document.getElementById('main');
const warning_title = document.getElementById('warning_title');
const warning_detail = document.getElementById('warning_detail');
const err_box = document.getElementById('errBox');

function activate_error_box(fire, gas) {
    if (fire || gas) {
        mn.style.cssText = 'filter: blur(2px)';
        err_box.style.display = 'flex';

        if (fire && gas) {
            warning_title.innerHTML = "Fire and Harmful Gases";

            warning_detail.innerHTML = "Fire and Harmful gases is Detected in your house Evacuate!!";

            showNotification("Emergency Alert!", "Elevated levels of harmful gases and fire have been detected in your residence. Please evacuate immediately for your safety!”");
        }
        else if (fire) {
            warning_title.innerHTML = "Fire";

            warning_detail.innerHTML = "Fire Detected in your house   Evacuate!!";

            showNotification("Fire Emergency!", "Fire is detected at your residence!! Evacuate immediately for your safety ");
        }
        else if (gas) {
            warning_title.innerHTML = "Gas";

            warning_detail.innerHTML = "Combustible Gas HIGH Detected in your house. Evacuate!!";

            showNotification("Gas Emergency!", "Harmful Gases are detected !!  Evacuate immediately ");
        }
    }

    else {
        mn.style.cssText = 'filter: none';
        err_box.style.display = 'none'
        warning_title.innerHTML = "";
        warning_detail.innerHTML = "";
    }

    return true;
}

// <!-- Notification script: -->

function showNotification(title, message) {
    // Check if notifications are supported by the browser
    if (!("Notification" in window)) {
        console.log("Notifications not supported");
        return false;
    }

    // Check if permission to show notifications is granted
    if (Notification.permission !== "granted") {
        Notification.requestPermission().then(function (permission) {
            if (permission !== "granted") {
                console.log("Permission to show notifications denied");
                return false;
            } else {
                // Show the notification
                new Notification(title, {
                    body: message
                });
                return true;
            }
        });
    } else {
        // Show the notification
        new Notification(title, {
            body: message
        });
        return true;
    }
}

// showNotification("Fire Detected", "Fire Detected in your house. Evacuate!!");