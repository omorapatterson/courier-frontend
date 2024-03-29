import { Presentacion } from '../Presentacion/Presentacion';
import { Categoria } from '../Categoria/Categoria';
import { Empaque } from '../Empaque/Empaque';
import { Empresa } from '../Empresa/Empresa';
import { Grupo } from '../Grupo/Grupo';
import { Pallet } from '../Pallet/Pallet';
import { Proveedor } from '../Proveedor/Proveedor';
import { CategoriaGPC } from '../CategoriaGPC/CategoriaGPC';

export class Producto {
	empaques?: Empaque[];
	categoria?: Categoria;
	id?: number;
	cpp?: number;
	descripcion?: string;
	marca?: string;
	division?: string;
	linea?: string;
	gtin13?: number;
	env?: string;
	envcant?: number;
	envum?: string;
	pidexunid?: boolean;
	gtin14?: number;
	unidcaja?: number;
	cajacamad?: number;
	nuevo?: boolean;
	camadpall?: number;
	paisid?: string;
	paisOrigen?: string;
	esPromo?: boolean;
	suspendidoDesde?: Date;
	suspendidoHasta?: Date;
	fechaCreacion?: Date;
	fechaEdicion?: Date;
	cppprom?: number;
	precio?: number;
	falta?: Date;
	cantidad?: number;
	foto?: string;
	proveedor?: number;
	_proveedor?: Proveedor;
	gtin?: string;
	gtinPresentacion?: string;
	contenidoNeto?: number;
	pesoBruto?: number;
	visiblePor?: number[];
	unidadMedida?: string;
	enWishlist: boolean;
	empresasConVisibilidad?: Empresa[];
	presentacion?: Presentacion;
	pallet?: Pallet;
	alto?: number;
	ancho?: number;
	profundidad?: number;
	mercadoObjetivo?: string;
	unidadMedidaPesoBruto?: string;
	nivelMinimoVenta?: number;
	gruposConVisibilidad?: Grupo[];
	visibilidadPorGrupo?: boolean;
	esPrivado?: boolean;
	esPublico?: boolean;
  categoriaGPC?: CategoriaGPC
}

export class ProductoCatalogo {
	alto?: number;
	ancho?: number;
	categoriaGpc?: string;
	contenidoNeto?: number;
	cpp?: number;
	descripcion?: string;
	foto?: string;
	glnPublicador?: number;
	gtin?: string;
	gtinPresentacion?: string;
	gtinUnidadMin?: number[];
	esPromo?: boolean;
	id?: number;
	idInferior?: string[];
	marca?: string;
	paisOrigen?: string;
	pediblePor?: number[];
	pesoBruto?: number;
	posicion?: number;
	profundidad?: number;
	tipoIdInferior?: number[];
	unidadMedida?: string;
	unidadesCamada?: number;
	visiblePor?: number[];
	presentacion?: Presentacion;
	categoria?: Categoria;
	empaques?: Empaque[];
	enWishlist: boolean;
	mercadoObjetivo?: string;
	unidadMedidaPesoBruto?: string;
	nivelMinimoVenta?: number;
	empresasConVisibilidad?: Empresa[];
	gruposConVisibilidad?: Grupo[];
	pallet?: Pallet;
}
