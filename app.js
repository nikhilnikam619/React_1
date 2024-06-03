///React

// const heading = React.createElement("h1", { id: "fog", className: "hog" }, "hello world from React !")

// console.log(heading)//return object

// const root = ReactDOM.createRoot(document.getElementById("ulo"))

// root.render(heading)



//nested element


// const named = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, React.createElement("h1", { id: "my" }, "hello friends")))


// const root = ReactDOM.createRoot(document.getElementById("ulo"))

// root.render(named)


//siblings

// const siblings = React.createElement("div", { id: "parent" },
//     React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "1st h1"),
//     React.createElement("h2", {}, "2nd h2")]))


// const root = ReactDOM.createRoot(document.getElementById("ulo"))

// root.render(siblings)

//div siblings



// const siblings = React.createElement("div", { id: "parent" },
//     [React.createElement("div", { id: "child1" }, [
//         React.createElement("h1", {}, "1st h1"),
//         React.createElement("h2", {}, "2nd h2")]),
//     React.createElement("div", { id: "child2" }, [
//         React.createElement("h1", {}, "2 of1st h1"),
//         React.createElement("h2", {}, "2 of 2nd h2")])])


// const root = ReactDOM.createRoot(document.getElementById("ulo"))

// root.render(siblings)





//just to see how this overide that html elemnt h1(h1 will be no more in console or in page)//but it will not replce whatever except that div tag they will be remain same



setTimeout(function () {

    const siblings = React.createElement("div", { id: "parent" },
        [React.createElement("div", { id: "child1" }, [
            React.createElement("h1", {}, "1st h1"),
            React.createElement("h2", {}, "2nd h2")]),
        React.createElement("div", { id: "child2" }, [
            React.createElement("h1", {}, "2 of1st h1"),
            React.createElement("h2", {}, "2 of 2nd h2")])])


    const root = ReactDOM.createRoot(document.getElementById("ulo"))

    root.render(siblings)



}, 2000)



