/*

--- HOW TO USE THIS SCRIPT ---
Open UniFi Network Topology: https://your.unifi.network.host/network/default/topology
Copy the whole script (CTRL+A in most places)
Run the below script inside the console (CTRL+SHIFT+K opens the console in Firefox, might need permission to paste)

*/

// Clear console of previous errors not made by this script and show disclaimer
console.clear()

console.warn(`
--- DISCLAIMER ---
THIS PROJECT/SCRIPT IS NOT FROM UBIQUITI, PLEASE DON'T SEND SUPPORT MESSAGES TO THEM
THE SCRIPT'S ORIGIN/GITHUB PROJECT: https://github.com/NKkrisz/Unified-Diagrams

PLEASE NOTE THIS WAS ONLY TESTED IN FIREFOX AND DARK MODE NETWORK UI, SO IT MIGHT NOT WORK FOR YOU

THIS IS VERY HARD CODED, AND CAN BE EASILY BROKEN BY AN UPDATE
IF THERE IS AN ISSUE, FEEL FREE TO OPEN A PULL REQUEST
`)

/*
deviceList = {
    exampleDevice = {
        img : image_source_link,
        mac : MAC_address,
        ip : IP_address,
    },
    nextExampleDevice...
}
*/

let deviceList = {}

document.querySelectorAll("text").forEach(device => {
    // Visibility shows devices' Wifi Experience %, everything else is only device names
    if(!device.style["visibility"]) {

        //Used for debugging, pls ignore
        // console.log(device);

        // Initialize device so properties can be added
        deviceList[device.textContent] = {}
        
        // Get MAC Address
        deviceList[device.textContent]["mac"] = device.parentElement.parentElement.id

        // Cursed code to get image source
        deviceList[device.textContent]["img"] = device.parentElement.previousSibling.firstChild.src
    }
})

//Used for debugging, pls ignore
// console.log(deviceList);

// function getOtherDeviceData(device) {
//     console.log("a");
//     const click_event = new MouseEvent("click", {view: window, bubbles: true})
    
//     // Click the device to show more information panel
//     document.getElementById(deviceList[device]["mac"]).querySelector("rect").dispatchEvent(click_event)
    
//     //.css-network-1998b4f is the class given to device detail rows eg. Network - Default, IP Address etc...
//     // Needs timeout because code is too slow lol (at least on my machine)
//     // setTimeout(function(){
//         document.querySelectorAll(".css-network-1998b4f").forEach(detailRow => {
            
//             //Used for debugging pls ignore
//             console.log(detailRow);

//             // Get IP Address
//             if(detailRow.firstChild.innerText == "IP Address"){
//                 deviceList[device]["ip"] = detailRow.lastChild.innerText
//             }
//         })
//     // }, 1000)
// };

// for(let device in deviceList){
//     console.log(device);
//     getOtherDeviceData(device)
// }

console.log(deviceList);

// function downloadImages(){

// }