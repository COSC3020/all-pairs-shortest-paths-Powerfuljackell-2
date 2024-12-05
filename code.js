
function allPairsShortestPaths(graph) {
    let dist = Array.from(graph, (v,i) =>{ //theta n^2
        for(j = 0; j < v.length; j++){
            if(v[j] == 0 && j != i){
                v[j] = Infinity;
            }
        }
        return v
    });
    for(k = 0; k < graph.length; k++){
        for(i = 0; i < graph.length; i++){
            for(j = 0; j <graph.length; j++){
                if(dist[i][j] > (dist[i][k] + dist[k][j])) dist[i][j] = dist[i][k] + dist[k][j];//theta n^3
            }
        }
    }
    return dist;
}

/*
let test = [[0,1,0],[1,0,1],[0,1,0]]

console.log(allPairsShortestPaths(test))
*/