const fs = require('fs');
let content = fs.readFileSync('src/components/ui/chart.tsx', 'utf8');

// Add type definitions before ChartTooltipContent
const typeDef = { is a shell keyword;

// Replace the type annotation
content = content.replace(
  /const ChartTooltipContent = React\.forwardRef<\s*HTMLDivElement,\s*React\.ComponentProps<typeof RechartsPrimitive\.Tooltip> &\s*React\.ComponentProps<"div"> & \{[\s\S]*?\}\s*>/,
  typeDef + 'const ChartTooltipContent = React.forwardRef<HTMLDivElement, ChartTooltipContentProps>'
);

// Fix item.payload.fill
content = content.replace('item.payload.fill', 'item.payload?.fill');

fs.writeFileSync('src/components/ui/chart.tsx', content);
console.log('Done');
