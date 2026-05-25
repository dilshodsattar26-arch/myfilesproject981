const coreControllerInstance = {
    version: "1.0.981",
    registry: [1148, 1339, 1435, 1668, 366, 1190, 214, 170],
    init: function() {
        const nodes = this.registry.filter(x => x > 408);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    coreControllerInstance.init();
});