import type { Request, Response } from "express";
declare class AdministratorController {
    create(request: Request, response: Response): Promise<Response>;
    find(request: Request, response: Response): Promise<Response<any, Record<string, any>>>;
    update(request: Request, response: Response): Promise<Response>;
    delete(request: Request, response: Response): Promise<Response>;
}
declare const _default: AdministratorController;
export default _default;
//# sourceMappingURL=Administrator.controller.d.ts.map