AFRAME.registerComponent("objects",{
init:function(){
    this.mobs()
    this.sword()
},

mobs:function(){
    var ground=document.querySelector("#scene")
    // var posX = Math.random(-10,-20) 
    // var posY = Math.random(1,5) 
    // var posZ = Math.random(1,5) 
    //  for(var i=0; i<7; i++){
        var id="zombie1"
        var cow =document.createElement("a-entity")
        cow.setAttribute("id",id)
        cow.setAttribute("position",{x:30,y:0.7,z:15})
        cow.setAttribute("scale", { x:0.04, y:0.04, z:0.04 })
        cow.setAttribute("gltf-model","./assets/minecraft_-_zombie/scene.gltf")
        // cow.setAttribute("property: position; to: 1 2 5")
        ground.append(cow)
        var id="zombie2"
        var cow =document.createElement("a-entity")
        cow.setAttribute("id",id)
        cow.setAttribute("position",{x:19,y:0.7,z:15})
        cow.setAttribute("scale", { x:0.04, y:0.04, z:0.04 })
        cow.setAttribute("gltf-model","./assets/minecraft_-_zombie/scene.gltf")
        // cow.setAttribute("property: position; to: 1 2 5")
        ground.append(cow)
        var id="zombie3"
        var cow =document.createElement("a-entity")
        cow.setAttribute("id",id)
        cow.setAttribute("position",{x:-25,y:0.7,z:15})
        cow.setAttribute("scale", { x:0.04, y:0.04, z:0.04 })
        cow.setAttribute("gltf-model","./assets/minecraft_-_zombie/scene.gltf")
        // cow.setAttribute("property: position; to: 1 2 5")
        ground.append(cow)
  // }
},
sword: function(){
    //var cam=document.querySelector("#camera")
    var element1=document.createElement("a-entity")
    var id="sword1"
    element1.setAttribute("id",id)
    element1.setAttribute("position",{x:1,y:1,z:-1})
    element1.setAttribute("scale",{x:100, y:100, z:100})
    element1.setAttribute("gltf-model","./assets/sword/scene.gltf")
   // cam.appendChild(element)




}
// removeMob: function (e) {
//     var element = e.detail.target.el;

//     var elementHit = e.detail.body.el;

//     if (elementHit.id.includes("box")) {
//       elementHit.setAttribute("material", {
//         opacity: 1,
//         transparent: true,
//       });

})