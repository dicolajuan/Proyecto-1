export const Helper = {

    generarId : () => {
        let fecha = Date.now().toString(36);
        let random = Math.random().toString(36).substring(2);
        return fecha + random;
    }

}

