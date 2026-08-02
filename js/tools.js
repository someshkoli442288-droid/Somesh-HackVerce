// Somesh HackVerse V2 - Tools Manager


const tools = [

    {
        name: "AI Image",
        page: "ai-image.html",
        icon: "🎨"
    },


    {
        name: "Text Tools",
        page: "text-tools.html",
        icon: "✍️"
    },


    {
        name: "Creator Tools",
        page: "tools.html",
        icon: "🛠️"
    }


];



function getTools() {

    return tools;

}



function searchTools(keyword) {


    return tools.filter(tool =>

        tool.name
        .toLowerCase()
        .includes(
            keyword.toLowerCase()
        )

    );


}
