from fastapi import APIRouter

router = APIRouter()

# @router.get("/status")
# def get_status():
#     return {"status": "API funcionando correctamente"}


@router.get("/login-test")
def login_test():
    return {"message": "Backend funcionando correctamente 🎉"}