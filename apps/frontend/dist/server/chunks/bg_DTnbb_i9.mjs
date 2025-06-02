const BgImage = new Proxy({"src":"/_astro/bg.CIn-t9Yh.jpg","width":2560,"height":1707,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/zayit/projetos/lumino/apps/frontend/src/assets/images/bg.jpg";
							}
							
							return target[name];
						}
					});

export { BgImage as B };
