import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/stores/cartStore';
import { SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';

const CartDrawer = () => {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCartStore();
  const totalPrice = getTotalPrice();

  if (items.length === 0) {
    return (
      <div className="flex h-full flex-col">
        <SheetHeader>
          <SheetTitle className="font-display text-2xl">Your Cart</SheetTitle>
        </SheetHeader>
        <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
          <div className="rounded-full bg-muted p-6">
            <ShoppingBag className="h-12 w-12 text-muted-foreground" />
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground">Your cart is empty</h3>
            <p className="mt-1 font-body text-sm text-muted-foreground">
              Add some delicious pork cuts to get started!
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col">
      <SheetHeader>
        <SheetTitle className="font-display text-2xl">Your Cart ({items.length})</SheetTitle>
      </SheetHeader>

      <div className="mt-6 flex-1 overflow-y-auto">
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4 rounded-lg bg-card p-4 border border-border">
              <img
                src={item.image}
                alt={item.name}
                className="h-20 w-20 rounded-md object-cover"
              />
              <div className="flex flex-1 flex-col">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-display font-semibold text-foreground">{item.name}</h4>
                    <p className="font-body text-sm text-muted-foreground">{item.weight}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-muted-foreground hover:text-destructive"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center font-body font-medium">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <span className="font-display font-semibold text-primary">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <Separator />
        <div className="flex items-center justify-between">
          <span className="font-display text-lg font-semibold text-foreground">Total</span>
          <span className="font-display text-2xl font-bold text-primary">${totalPrice.toFixed(2)}</span>
        </div>
        <Button className="w-full" size="lg">
          Proceed to Checkout
        </Button>
        <Button variant="outline" className="w-full" onClick={clearCart}>
          Clear Cart
        </Button>
      </div>
    </div>
  );
};

export default CartDrawer;
