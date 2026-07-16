(async function() {
    const [geo, props] = await Promise.all([
        fetch('data/paises-geo.json').then(r => r.json()),
        fetch('data/paises-props.json').then(r => r.json())
    ]);
    window.json_FESplataformas_0 = {
        ...geo,
        features: geo.features.map(f => ({
            ...f,
            properties: { ...f.properties, ...props[f.properties.COUNTRY] }
        }))
    };
    window.dispatchEvent(new CustomEvent('paisesLoaded'));
})();
